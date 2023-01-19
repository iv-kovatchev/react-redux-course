import Dropdown from "./Dropdown";
import {useState} from "react";
import Convert from "./Convert";

const options = [
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Italian',
        value: 'it'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                selected={language}
                options={options}
                onSelectedChange={setLanguage}
                label="Select a Language"
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;