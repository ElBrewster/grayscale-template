export default function Form() {
    return (
        <form className="my-form-container">
            <div className="input-container">
                <label htmlFor="my-input" className="input-label">My Input:&nbsp;</label>
                <input type="text" name="my-input" className="my-input" placeholder="my input"/>
            </div>
            <div className="input-container">
                <label htmlFor="my-input" className="input-label">My Input:&nbsp;</label>
                <input type="text" name="my-input" className="my-input" placeholder="my input"/>
            </div>
            <div className="input-container">
                <label htmlFor="my-input" className="input-label">My Input:&nbsp;</label>
                <input type="text" name="my-input" className="my-input" placeholder="my input"/>
            </div>
            <div className="select-container">
                <label htmlFor="my-select" className="select-label"></label>
                <select name="my-slect" id="mySelect">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                </select>
            </div>
            <fieldset className="radio-container">
                <legend>Let's Have Some Radios!!!</legend>
                <div className="radio-button-container">
                    <input type="radio" value="yes"/>
                    <label htmlFor="yes">&nbsp;Yes</label>
                </div>
                <br />
                <div className="radio-button-container">
                    <input type="radio" value="no"/>
                    <label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div className="radio-button-container">
                    <input type="radio" value="occasionally"/>
                    <label htmlFor="occasionally">&nbsp;Occasionally</label>
                </div>
            </fieldset>
            <div className="textarea-container">
                <textarea name="comments" className="my-textarea" placeholder="Add Your Comments!"/>
            </div>
            <div className="checkbox-container">
                <input type="checkbox" name="completed-survey"/>
                <label htmlFor="completed-survey">&nbsp;Did you complete our survey?</label>
            </div>
            <button>SUBMIT</button>
        </form>
    );
}