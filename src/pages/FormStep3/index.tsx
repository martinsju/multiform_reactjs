import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleSubmit = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Complete the fields.")
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 3/3</p>
                <h1>Nice, {state.name}, where do we find you?</h1>
                <p>Fill the contact fields so we can reach you. </p>
                <hr />

                <label>
                    What's your e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    What's your Github?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to={'/step2'} className="previousButton">Previous</Link>
                <button onClick={handleSubmit}>Submit</button>
            </C.Container>
        </Theme>
    );
}