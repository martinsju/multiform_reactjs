import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert("Complete the fields.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 2/3</p>
                <h1>{state.name}, tell us your level as a developer</h1>
                <p>Click to define which level are you curently</p>
                <hr />

                <SelectOption
                    title="I'm a beginner"
                    description="Started to programming less than 2 years ago."
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="I'm a developer"
                    description="I've been coding for over 2 years."
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to={'/'} className="previousButton">Previous</Link>
                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    );
}