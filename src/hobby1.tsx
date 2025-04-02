// hobby1.tsx component that introduces the hobby of the first person and includes an image of their hobby.
//     a. list1.tsx component (list from Assignment 1b)
//     b. table1.tsx component (table from Assignment 1b)
//     c. form.tsx component (form from Assignment 1b)
function AndysHobby(props) {
    return (
        <div>
            <p>
                I'm Andy, and I'm a student at WPI. I'm currently doing my bachelors'degree in Computer Science.
                My biggest dream is to become a better version of myself every day.
            </p>

            <p>
                My favorite hobbies are play video games, watch movies, go out with my girlfriend, and workout at the
                gym.
            </p>

            <ol>
                <li>Computer</li>
                <li>Barbell</li>
                <li>Dumbbell</li>
                <li>Controller</li>
                <li>Cellphone</li>
            </ol>

            <hr/>

            <table className="collapse">
                <caption>WPI Academic Record</caption>
                <thead>
                <tr>
                    <th>Courses</th>
                    <th>Grade</th>
                    <th>Credits Earned</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Calculus IV</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Software Engineering</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Cell Biology</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Modern Physics</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                </tbody>
            </table>

            <h2>Cheeseburger Order</h2>
            <form>
                <label htmlFor="name">Enter your Name</label>
                <input type="text" id="name"/>
                <br/><br/>

                <label htmlFor="burgertype">Burger Cooking Preference</label>
                <input type="text" id="burgertype"/>
                <br/><br/>

                <h3>Toppings</h3>
                <input type="checkbox" id="tomatoes"/>
                <label htmlFor="tomatoes">Tomato</label>
                <br/>
                <input type="checkbox" id="lettuce"/>
                <label htmlFor="lettuce">Lettuce</label>
                <br/>
                <input type="checkbox" id="pickles"/>
                <label htmlFor="pickles">Pickles</label>
                <br/>

                <h3>Choose Burger Size</h3>
                <input type="radio" id="small" name="burgerSize"/>
                <label htmlFor="small">Small</label>
                <br/>
                <input type="radio" id="medium" name="burgerSize"/>
                <label htmlFor="medium">Medium</label>
                <br/>
                <input type="radio" id="large" name="burgerSize"/>
                <label htmlFor="large">Large</label>
                <br/><br/>

                <label htmlFor="comments">Additional Comments</label>
                <textarea rows="2" cols="50" id="comments"></textarea>
                <br/><br/>

                <label htmlFor="beverages">Choose your Drink</label>
                <select id="beverages" name="beverages">
                    <option value="water">Water</option>
                    <option value="orangejuice">Orange Juice</option>
                    <option value="coke">Coke</option>
                </select>
                <br/><br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
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

export default {KangsHobby,AndysHobby};

