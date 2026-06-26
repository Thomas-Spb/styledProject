import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper.tsx";
import H2 from "../../../components/h2/H2.tsx";
import Text from "../../../components/text/Text.tsx";
import Icon from "../../../components/icon/Icon.tsx";
import FieldForm from "../../../components/fieldForm/FieldForm.tsx";
import Button from "../../../components/button/Button.tsx";

const Contact = () => {
    return (
        <StyledSectionContact>
            <FlexWrapper>
                <StyledContact>
                    <H2 text={`Connect with me:`}/>
                    <Text text={`Satisfied with me? Please contact me`} />
                    <StyledContactList>
                        <li><a href="#"><Icon iconId={'facebook'} /></a></li>
                        <li><a href="#"><Icon iconId={'instagram'} /></a></li>
                        <li><a href="#"><Icon iconId={'dribble'} /></a></li>
                        <li><a href="#"><Icon iconId={'sms'} /></a></li>
                    </StyledContactList>
                </StyledContact>

                <StyledContact>
                    <Text text={`Contact me, let’s make magic together`} />
                    <StyledForm>
                        <FieldForm id={'name'} placeholder={'Name:'}/>
                        <FieldForm type={'email'} id={'email'} placeholder={'Email:'}/>
                        {/*<FieldForm as={"textarea"}  name="message" placeholder="Message" id="message"/>*/}
                        <textarea rows={5} name="message" placeholder="Message" id="message"/>
                        <Button text={'Send'} />
                    </StyledForm>
                </StyledContact>
            </FlexWrapper>
        </StyledSectionContact>
    );
};

export default Contact;

const StyledSectionContact = styled.section`
    background-color: #1A1A29`

const StyledContact = styled.div``

const StyledContactList = styled.ul`
    display: flex
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`
