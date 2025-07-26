function RecentSearch({ recentHistory, setRecentHistory, setSelectedResult }){
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
    return(
        <>
        
        <div className="col-span-1 bg-zinc-900 h-screen text-center text-cyan-50">
          <h1 className=" mt-3 gap-1 flex justify-center text-center">
            <span>Result History</span>
            <button className="cursor-pointer" onClick={clearHistory}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </h1>
          <ul className="pt-3 text-zinc-500">
            {recentHistory &&
              recentHistory.map((question, index) => (
                <li key={index}
                  onClick={() => {
                    setSelectedResult(question);
                  }}
                  className="hover:bg-zinc-600 truncate pl-4 text-start cursor-pointer hover:text-zinc-200"
                  
                >
                  {question}
                </li>
              ))}
          </ul>
        </div>
        
           </>
    )
}
export default RecentSearch