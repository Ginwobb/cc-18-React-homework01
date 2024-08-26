function App(){
    const stBg={
        backgroundColor:'#F5F5F5',
        width:'900px',
        height:'500px',
        margin:'0 auto',
        padding:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'sans-serif'
    }
    const stCtn={
        backgroundColor:'#FFFFFF',
        width:'850px',
        height:'450px',
        display:'flex',
        justifyContent:'center',
        margin:'0 auto',
        padding:'30px',
        borderRadius:'20px',
        flexDirection:'column'
    }
    return(
        <div style={stBg}>
            <div style={stCtn}>
                <Info/>
                <Status/>
            </div>
        </div>
    )
}

function Info(){
    const stImg={
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        overflow:'hidden',
        alignSelf: 'center',
    }
    const stInfo ={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        height:'70%'
    }
    const sttext={
        fontSize:'18px',
        textAlign:'center'    
    }
    return(
        <div style={stInfo}>
        <div style={stImg}>
            <img style={{width:'150px'}} src='https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'></img>
        </div>
        <div style={sttext}>
            <h2>Julienne Moore</h2>
            <p style={{color:'#909090'}}>julienne.moore@company.com</p>
        </div>
        </div>
    )
}
function Status(){
    const stStatus ={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        textAlign:'center',
        height:'40%'
    }
    const stH3={
        color:'#909090',
        fontWeight:'500'
    }
    return(
        <div style={stStatus}>
            <div>
                <h2>25</h2>
                <h3 style={stH3}>Posts</h3>
            </div>
            <div>
                <h2>350</h2>
                <h3 style={stH3}>Following</h3>
            </div>

            <div>
                <h2>1.5K</h2>
                <h3 style={stH3}>Followers</h3>    
            </div>
        </div>

    )
}
ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)
