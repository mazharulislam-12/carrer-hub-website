
const getStoredApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications')
    if (saveJonApplication) {
        return JSON.parse(storedJobApplication)
    }
    return [];
}

const saveJonApplication = id =>{
    const storedJobApplication = getStoredApplication();
    const exists = storedJobApplication.find(  jobId => jobId === id)
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))

    }
}
export {getStoredApplication as getStoredApplication, saveJonApplication}