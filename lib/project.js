import project, { category } from "../content/project";


function getAllProjectId(){
    let path = []
    for (const id in category) {
        let val = { params: {id} }
        path.push(val)
    }
    return path
}


function mapAllProject(){
    let path = []
    for (const id in category) {
        let val = { id, name: category[id] }
        path.push(val)
    }
    return path 
}


function getProjectCount(val=null){
    let count = 0

    if(val === null){
        return (project.length === 0)? count: project.length
    }
    
    let filtered = project.filter(x => x.category === val)
    return (filtered.length === 0)? count: filtered.length
}


function getProjectById(val){
    let filtered = project.filter(x => x.category === category[val])
    return filtered
}



function getKeyCategory(value) {
    return Object.keys(category).find(key => category[key] === value);
  }


export { getAllProjectId, mapAllProject, getProjectCount, getKeyCategory, getProjectById }