function KangsForm(){
    return(
        <form className={"form"}>
            <h2>Kang's Form</h2>

            <label htmlFor="room number">Enter Room Number: </label>
            <input type="text" id="room number"/>
            <br/><br/>
            <label htmlFor="device">Enter Needed Device: </label>
            <input type="text" id="device"/>

            <br/> <br/>
            <input type="checkbox" id="importance"/>
            <label htmlFor="importance">Is this important?</label>

            <br/>
            <input type="checkbox" id="cool?"/>
            <label htmlFor="cool?">Is the device cool? </label>

            <br/>
            <input type="checkbox" id="squid"/>
            <label htmlFor="squid">Is Squidward cool? </label>
            <br/> <br/>

            Who would you trust to operate on you?
            <br/>
            <input type="radio" id="card1" name="favorite card" value="squidward"/>
            <label htmlFor="card1">Squidward</label><br/>

            <input type="radio" id="spongebob" name="favorite card" value="spongebob"/>
            <label htmlFor="spongebob">Spongebob</label><br/>

            <input type="radio" id="patrick" name="favorite card" value="patrick"/>
            <label htmlFor="patrick">Patrick</label>


            <br/> <br/>
            <label htmlFor="comments"> Comments: </label>
            <br/>
            <textarea rows="2" cols="40" id="comments"> </textarea>
            <br/> <br/>

            <label htmlFor="hobby">Choose a hobby:</label>
            <select id="hobby" name="hobby">
                <option value="climbing">climbing</option>
                <option value="running">running</option>
                <option value="hiking">hiking</option>
            </select>
            <br/> <br/>

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default KangsForm;