
        const style={
            'background-color':'grey',
        'width':'50vw',
        'height':'34vh',
        'display':'flex',
        'justifyContent':'space-between'
    }
        const Header=(props)=>{
            return(
                <header style={style}>
            <h4>{props.mesg}</h4>
           <h5> {props.menu1}</h5>
                    </header>
            )
        }
        const Empty=(props)=>{
            return(
                <div>
                    {props.children}
                    </div>
            )
        }
           
        const HeroUnit=()=>{
            let clickhandler=()=>{alert('clicked')}
            return(
                <section style={{'background-color':'cyan','width':'50vw','height':'34vh'}}>
                <button onClink={clickhandler}>clickme</button>
                </section>
                )
        }
        const Show=()=>{
            return(
                <div style={{'background-color':'purple'}}>
                    show the elements
                    </div>
            )
        }
    ReactDOM.render(
        <Empty>
        <Header mesg="actalent" menu1="register"/>
        <HeroUnit/>
        <Show/>
        </Empty>,
    document.getElementById("placeholder"));
    ReactDOM.render(
        <Header mesg="actalent" menu1="register"/>,
        
    document.getElementById("placeholder1"))
    
