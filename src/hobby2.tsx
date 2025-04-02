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
export default AndysHobby;