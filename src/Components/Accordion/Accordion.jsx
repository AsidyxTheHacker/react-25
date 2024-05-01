import { useState } from "react";
import data from './data';
import './Accordion.css';

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(true);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId)
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1)
        };
        setMultiple(copyMultiple);
    };

    function textSwap() {
        let button = document.querySelector('.wrapper button');
        if (!enableMultiSelect) {
            button.textContent = 'Multi-Select Enabled';
        } else if (enableMultiSelect) {
            button.textContent = 'Multi-Select Disabled';
        };
    };

    return (
        <div className="wrapper">
            <button
                onClick={
                    () => {
                        setEnableMultiSelect(!enableMultiSelect);
                        textSwap();
                    }
                }>
                Multi-Select Enabled
            </button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item"
                            key={dataItem.id}
                            onClick={enableMultiSelect
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)}>
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelect ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">{dataItem.answer}</div> :
                                    selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            }
                        </div>
                        ) : <div>No data found...</div>
                }
            </div>
        </div>
    );
};