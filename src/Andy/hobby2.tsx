// hobby1.tsx component that introduces the hobby of the first person and includes an image of their hobby.
//     a. list1.tsx component (list from Assignment 1b)
//     b. table1.tsx component (table from Assignment 1b)
//     c. form.tsx component (form from Assignment 1b)


import AndysList from "./list2.tsx";
import AndysTable from "./table2.tsx";
import AndysForm from "./form2.tsx";
function AndysHobby() {
    return (
        <div className = "form-container">

            <h2>Andy's Hobbies</h2>
            <div id="rc">
                <img src="src/images/buffguy.jpg" width="640"/>
            </div>
            <p className = "andyhobby">
                My favorite hobbies are play video games, watch movies, go out with my girlfriend, and workout at the
                gym.
            </p>

            <div id="andystuff">
                <AndysList/>
                <AndysTable/>

            </div>

            <br/>
            <AndysForm/>
            <hr/>

        </div>
    );
}
export default AndysHobby;