// hobby1.tsx component that introduces the hobby of the first person and includes an image of their hobby.
//     a. list1.tsx component (list from Assignment 1b)
//     b. table1.tsx component (table from Assignment 1b)
//     c. form.tsx component (form from Assignment 1b)

function KangsHobby(props){
    return(
        <div id="kangsHobby">

            <h2>Kangs's Hobbies</h2>

            <div id="rc">
                <img src="src/images/rc.jpg" width="600" alt="rock climbing" id="rc_img"/>
            </div>

            <br/>

            <div id="kangstuff">
                <ul id="hobby1list">
                    <h3 id="hobby1header">
                        <b>
                            Some of my favorite hobbies include:
                        </b>
                    </h3>
                    <li>Rock Climbing</li>
                    <li>Video Games</li>
                    <li>Magic the Gathering</li>
                    <li>Trying new foods</li>
                    <li>Hiking</li>
                </ul>

                <table id="coolTable">
                    <caption><b> Ranking places in MA </b></caption>
                    <tr>
                        <th>Locations</th>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                    <tr>
                        <td>Worcester</td>
                        <td>The Fix</td>
                        <td>3.0</td>
                    </tr>

                    <tr>
                        <td>Natick</td>
                        <td>Natick Mall</td>
                        <td>4.0</td>
                    </tr>

                    <tr>
                        <td>Boston</td>
                        <td>Newbury Street</td>
                        <td>5</td>
                    </tr>
                </table>

            </div>


            <br/>
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
        </div>
    );
}

export default KangsHobby;

