// title.tsx component that contains a heading with the class, team number, and your two hobbies.
// For example, CS3733-D25 Team 97: Pottery and Cello

export function title(className: string, teamNumber: number, names: string){
    return(
        <div className={"title"}>
            <h1> {`${className} `} </h1>
            <h1> {`Team Number: ${teamNumber}   Name: ${names} `} </h1>
        </div>
    );
}