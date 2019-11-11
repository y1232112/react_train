class InfoBar extends React.Component{
    constructor(props) {
            super(props);
            this.state={repos : []};
        }
        async componentDidMount() {
            const res=await axios.get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories');
            console.log('res',res.data);
            console.log('res',res.data.avatar_url);
            this.setState({repos:res.data.items})
        }
        /*  */
        render(){
            var n=0;
            const list=this.state.repos.map((item,key)=><li key={item.id} style={{listStyle:'none',width:'280px',margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.08)'}}><h3 style={{textAlign:'center'}}>#{++n}</h3> <img src={item.owner.avatar_url}
            
            style={{width:'200px',height:'200px',margin:'0 auto',display:'block'}}/><p style={{textAlign:'center'}}><a href={item.html_url} style={{textDecoration:'none',color:'red'}}>{item.name}</a></p><p style={{marginLeft:'10px'}}><i class="fa fa-user" style={{color:'rgb(233, 174, 14)'}}></i><a href={item.owner.html_url} style={{textDecoration:'none'}}>{item.name}</a></p>  <p style={{marginLeft:'10px'}}><i class="fa fa-star" style={{color:'yellow'}}></i>
            {item.stargazers_count}</p> <p style={{marginLeft:'10px'}}> <i class="fa fa-code-fork" style={{color:'rgb(67, 120, 219)'}}></i>{item.forks}</p> 
            <p style={{marginLeft:'10px'}}><i class="fa fa-warning" style={{color:'red'}}></i>{item.open_issues_count}</p></li>);
              
                return <div><ul style={{width:'1200px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',margin:0,padding:0,alignContent:'space-between'
                ,minHeight:'3900px'}}>
                    
                         {list}
               
               
                </ul>
                </div>
         
        }
   }
   class NavHead extends React.Component{
       render(){
           return <div style={{display:'flex',flexDirection:'row',width:'1200PX',justifyContent:'space-between'}}>
                  <ul style={{paddingLeft:'0px',display:'flex',flexDirection:'row',width:'130px',justifyContent:'space-between'}}>
                     <li style={{padding:'0px',listStyle:'none'}}>
                         <a style={{textDecoration:'none',color:'rgb(187,46,31)'}}>Popular</a>
                     </li>
                     <li style={{padding:'0px',listStyle:'none'}}>
                        <a style={{textDecoration:'none',color:'black'}}>Battle</a>
                     </li>
                  </ul>
                  <button style={{border:'none',backgroundColor:'white'}}><i class="fa fa-lightbulb-o" style={{width:'50px',fontSize:'20px'}}></i></button>
           </div>
       }
   }
   class CenterLink extends React.Component{
       render(){
           return <div style={{width:'400px',margin:'0 auto'}}>
                  <ul style={{paddingLeft:'0px',width:'400px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <li style={{listStyle:'none'}}><button style={{border:'none',color:'red',backgroundColor:'white',fontSize:'20px'}}>All</button></li>
                  <li style={{listStyle:'none'}}><button style={{border:'none',backgroundColor:'white',fontSize:'20px'}}>JavaScript</button></li>
                  <li style={{listStyle:'none'}}><button style={{border:'none',backgroundColor:'white',fontSize:'20px'}}>Ruby</button></li>
                  <li style={{listStyle:'none'}}><button style={{border:'none',backgroundColor:'white',fontSize:'20px'}}>Java</button></li>
                  <li style={{listStyle:'none'}}><button style={{border:'none',backgroundColor:'white',fontSize:'20px'}}>CSS</button></li>
                  <li style={{listStyle:'none'}}><button style={{border:'none',backgroundColor:'white',fontSize:'20px'}}>Python</button></li>
                 
                  </ul>
           
           </div>
       }
   }
    class Content extends React.Component{

        render(){
            return <div style={{display:'flex',flexDirection:'column',width:'1200px',margin:'0px auto',alignItem:'center'}}>
                        <div style={{display :'flex'}}><NavHead/></div>
                        <div style={{display :'flex'}}><CenterLink/></div>
                        <div style={{display :'flex',flexDirection:'row'}}><InfoBar/></div>
            
            
            </div>
        }
    }
    class App extends React.Component{
       render(){
           return <div>
                    

           <Content/>
           
           
           </div>
       }
   } 
   ReactDOM.render(
         <App/>,
           document.getElementById('container')
       );