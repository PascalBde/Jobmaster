<?php

/**
 * Provides methods to interact with users
 *
 * @author Philipp Kiszka <info@o-dyn.de>
 * @name user
 */
class user
{
    //DB connection
    private $db;

    /*
     * Constructor
     */
    function __construct()
    {
        //reference global connection and mylog objects
        global $connection;
        $this->db = $connection;
    }

    /**
     * Creates a user
     *
     * @param string $name Name of the member
     * @param string $email E-mail address of the member
     * @param string $pass Password
     * @return int $insid ID of the newly created member
     */
    function add($name, $email, $pass)
    {
        $pass = password_hash($pass, PASSWORD_BCRYPT);
        $timeNow = time();

        $ins1Stmt = $this->db->prepare("INSERT INTO user (name, email, password, created) VALUES (?, ?, ?, ?)");
        $ins1 = $ins1Stmt->execute(array($name, $email, $pass, $timeNow));

        if ($ins1) {
            $insid = $this->db->lastInsertId();
            return (int)$insid;
        } else {
            return false;
        }
    }

    /**
     * Edits a member
     *
     * @param int $id Member ID
     * @param string $name Member name
     * @param string $email Email
     * @return bool
     */
    function edit($id, $name, $email)
    {
        $id = (int)$id;

        $updStmt = $this->db->prepare("UPDATE user SET name=?, email=? WHERE ID = ?");
        $upd = $updStmt->execute(array($name, $email, $id));

        if ($upd) {
            return (bool)true;
        } else {
            return false;
        }
    }

    /**
     * Generate a new password and send it to the user's e-mail address
     *
     * @param string $email E-mail address entered by the user
     * @return string
     */
    function resetPassword($email)
    {
        $user = $this->db->query("SELECT ID, email FROM user WHERE email={$this->db->quote($email)} LIMIT 1")->fetch();

        if ($user["email"] == $email) {
            $id = $user["ID"];
        }

        if (isset($id)) {
            $dummy = array_merge(range('0', '9'), range('a', 'z'), range('A', 'Z'), range('0', '9'));
            shuffle($dummy);
            mt_srand((double)microtime() * 1000000);
            $newpass = "";
            for ($i = 1; $i <= 10; $i++) {
                $swap = mt_rand(0, count($dummy) - 1);
                $tmp = $dummy[$swap];
                $newpass .= $tmp;
            }

            $sha1pass = password_hash($newpass, PASSWORD_BCRYPT);

            $upd = $this->db->query("UPDATE user SET `password` = '$sha1pass' WHERE ID = $id");
            if ($upd) {
                return array('newpass' => $newpass);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * Change password
     *
     * @param int $id Member ID
     * @param string $oldpass Old password
     * @param string $newpass New password
     * @param string $repeatpass Repetition of the new password
     * @return bool
     */
    function editpass($id, $oldpass, $newpass, $repeatpass)
    {
        $id = (int)$id;

        if ($newpass != $repeatpass) {
            return false;
        }
        $newpass = password_hash($newpass, PASSWORD_BCRYPT);

        $oldpass = password_hash($oldpass, PASSWORD_BCRYPT);
        $chk = $this->db->query("SELECT ID, name FROM user WHERE ID = $id AND password = {$this->db->quote($oldpass)}")->fetch();
        $chk = $chk[0];
        if (!$chk) {
            return false;
        }

        $upd = $this->db->query("UPDATE user SET password={$this->db->quote($newpass)} WHERE ID = $id");
        if ($upd) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Change password as admin
     *
     * @param int $id User ID
     * @param string $newpass New password
     * @param string $repeatpass Repetition of the new password
     * @return bool
     */
    function adminEditpass($id, $newpass, $repeatpass)
    {
        $id = (int)$id;

        if ($newpass != $repeatpass) {
            return false;
        }
        $newpass = password_hash($newpass, PASSWORD_BCRYPT);

        $upd = $this->db->query("UPDATE user SET password={$this->db->quote($newpass)} WHERE ID = $id");
        if ($upd) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Delete a user
     *
     * @param int $id User ID
     * @return bool
     */
    function del($id)
    {
        $id = (int)$id;

        $del = $this->db->query("DELETE FROM user WHERE ID = $id");

        if ($del) {

            return true;
        } else {
            return false;
        }
    }

    /**
     * Get a user profile
     *
     * @param int $id User ID
     * @return array $profile Profile
     */
    function getUser($id)
    {
        $id = (int)$id;

        $sel = $this->db->prepare("SELECT * FROM user WHERE ID=?");
        $sel->execute(array($id));

        // print_r($sel->errorInfo());
        $profile = $sel->fetch();
        if (!empty($profile)) {
            $profile["ID"] = (int)$profile["ID"];
            return $profile;
        } else {
            return false;
        }
    }

    /**
     * Log a user in
     *
     * @param string $user User name
     * @param string $pass Password
     * @return bool
     */
    function login($user, $pass)
    {
        if (!$user || !$pass) {
            return false;
        }

        //Sanitize user
        $user = $this->db->quote($user);

        //select the password from the DB
        $sel1 = $this->db->query("SELECT password,ID FROM user WHERE email = $user");
        $userData = $sel1->fetch();

        //verify the password
        if (password_verify($pass, $userData["password"])) {
            //Fetch data about the user
            $sel = $this->db->query("SELECT ID,name,email FROM user WHERE ID = $userData[ID]");
            $userDetails = $sel->fetch();

            $now = time();
            $_SESSION["userid"] = $userDetails["ID"];
            $_SESSION["username"] = $userDetails["name"];
            $_SESSION["useremail"] = $userDetails["email"];

            echo session_id();
            return session_id();

        } else {
            return false;
        }
    }

    /**
     * Logout
     *
     * @return bool
     */
    function logout()
    {
        session_destroy();
        session_unset();
        setcookie("PHPSESSID", "");
        return true;
    }

    /**
     * Returns all users
     *
     * @param int $start offset
     * @param int $lim Limit
     * @return array $users Registrierte Mitglieder
     */
    function getAllUsers($start = 0, $lim = 10)
    {
        $lim = (int)$lim;
        $start = (int)$start;

        $num = $this->db->query("SELECT COUNT(*) FROM user")->fetch();
        $num = $num["COUNT(*)"];


        $sel2 = $this->db->query("SELECT ID FROM user ORDER BY ID DESC LIMIT $start,$lim");

        $users = array();
        $users["total"] = $num;
        $users["items"] = array();
        while ($user = $sel2->fetch()) {
            array_push($users["items"], $this->getUser($user["ID"]));
        }

        if (!empty($users)) {
            return $users;
        } else {
            return false;
        }
    }

    /**
     * Get a user's ID
     *
     * @param string $user Username
     * @return int $theid
     */
    function getId($user)
    {
        $sel = $this->db->query("SELECT ID FROM user WHERE name = {$this->db->quote($user)}");
        $id = $sel->fetch();
        // $id = $id[0];

        $theid = array();

        $theid["ID"] = $id;

        if ($id > 0) {
            return $theid;
        } else {
            return array();
        }
    }
}

?>
