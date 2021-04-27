import React, {Component} from "react";
import {Radio} from "semantic-ui-react";

class SkillRatingButtons extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        
    }

    render() {
    
        const {values, skillValue} = this.props;
        let radioChangeHandler = this.props.radioChangeHandler;

        return(
            <div className="row mt-2">
                <div className="offset-1" />
                
                    
                    <Radio
                        label={"1"}
                        name={"skillRadio"}
                        value={"1"}
                        checked={skillValue === "1"}
                        onChange={() => radioChangeHandler('userSkillValue')}
                        defaultValue={values.userSkillValue}
                    />
                    
                        
                    
                
                <div className="offset-1" />
                
                    
                    <Radio
                        label={"2"}
                        name={"skillRadio"}
                        value={"2"}
                        checked={skillValue === "2"}
                        onChange={() => radioChangeHandler('userSkillValue')}
                        defaultValue={values.userSkillValue}
                    />
                        
                    
                
                <div className="offset-1" />
                
                    
                    <Radio
                        label={"3"}
                        name={"skillRadio"}
                        value={"3"}
                        checked={skillValue === "3"}
                        onChange={() => radioChangeHandler('userSkillValue')}
                        defaultValue={values.userSkillValue}
                    />
                        
                    
               
                <div className="offset-1" />
                
                    
                    <Radio
                        label={"4"}
                        name={"skillRadio"}
                        value={"4"}
                        checked={skillValue === "4"}
                        onChange={() => radioChangeHandler('userSkillValue')}
                        defaultValue={values.userSkillValue}
                    />
                        
                    
               
                <div className="offset-1" />
                
                    
                    <Radio
                        label={"5"}
                        name={"skillRadio"}
                        value={"5"}
                        checked={skillValue === "5"}
                        onChange={() => radioChangeHandler('userSkillValue')}
                        defaultValue={values.userSkillValue}
                />
                    
                    
                
        </div>
        )
    }
}

export default SkillRatingButtons