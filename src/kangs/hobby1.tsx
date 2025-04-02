import KangsList from "./list1.tsx";
import KangsTable from "./table1.tsx";
import KangsForm from "./form1.tsx";

function KangsHobby(props){
    return(
        <div id="kangsHobby">

            <h2>Kangs's Hobbies</h2>

            <div id="rc">
                <img src="../../src/images/rc.jpg" width="600" alt="rock climbing" id="rc_img"/>
            </div>

            <br/>

            <div id="kangstuff">
                <KangsList/>
                <KangsTable/>

            </div>

            <br/>
            <KangsForm/>

        </div>


    );
}

export default KangsHobby;

