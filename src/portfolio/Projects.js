import React from "react"
import '../App.css'

import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button,  CardText} from 'react-mdl'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onWindowScroll);
      }

    onWindowScroll = () => {
        let element = document.querySelector('.projects')
        if (window.scrollY > 700){
            element.classList.add('trans-projects')
        } else {
            element.classList.remove('trans-projects')
        }
        
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(  
            <div className="projects-grid">
                    {/* React Project 1 */}
                    <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px' }}>
                        <CardTitle style= 
                        {{color:'#fff', height:'176px', background: 'url(https://i.imgur.com/0jQQ6SU.png) center / cover'}}>My Portfolio</CardTitle>
                        <CardText>This project is a simple portfolio website, which showcases everything about me and ways to contact me</CardText>
                        <CardActions border>
                        < Button colored a href='https://github.com/kolikay/my_portfolio' target="_blank"  >GitHub</Button>
                        </CardActions>
                        

                    </Card>
                    {/* React Project 2 */}
                    <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                        <CardTitle style= 
                        {{color:'#fff', height:'176px', background: 'url(https://i.imgur.com/0jQQ6SU.png) center / cover'}}>Public Website</CardTitle>
                        <CardText>This website was created to help individuals or SMEs showcase thiers goods and services by just registring on the website and uploading thier goods and services</CardText>
                        <CardActions border>
                        < Button colored a href='https://github.com/kolikay/new_porfolio.git' target="_blank"  >GitHub</Button>
                        </CardActions>
                        

                    </Card>
                      {/* React Project 3 */}
                      <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                        <CardTitle style= 
                        {{color:'#fff', height:'176px', background: 'url(https://i.imgur.com/0jQQ6SU.png) center / cover'}}>Clients Portfolio</CardTitle>
                        <CardText>This portfolio website was created for a client, it showcases the clients projectss, contants and general informations</CardText>
                        <CardActions border>
                        < Button colored a href='https://github.com/kolikay/new_porfolio.git' target="_blank"  >GitHub</Button>
                        </CardActions>
                        

                    </Card>
                    </div> 
                )
        }else if (this.state.activeTab === 1){
            return(


                <div className="projects-grid">
                {/* Python Project 1 */}
                <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                    <CardTitle style= 
                   {{color:'grey', height:'176px', background: `url(data:image/png;base64,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) center / cover`}}>CGPA Calculator</CardTitle>
                    <CardText> This is a simple CGPA calculator, made with python that help student calculate thier CGPA easily. click the link about to view the code base on github</CardText>
                    <CardActions border>
                    < Button colored a href='https://github.com/kolikay/CGPA-Calculator' target="_blank">GitHub</Button>
                        
                    </CardActions>
                    {/* <CardMenu style={{color: 'grey'}}>
                    <IconButton name='share'/>
                    </CardMenu> */}

                </Card>

                  {/* python Project 2 */}
                  <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                  <CardTitle style= 
                  {{color:'grey', height:'176px', background: `url(data:image/png;base64,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) center / cover`}}>Todo App</CardTitle>
                  <CardText>  Application for helping user arrange thiers to do items accordingly, click the link below to view the git repository</CardText>
                  <CardActions border>
                  < Button colored a href='https://github.com/kolikay/todoapp' target="_blank">GitHub</Button>
                   
                  </CardActions>
            

              </Card>

              
                </div>


            )
        }else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                {/* Django Project 1 */}
                <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                    <CardTitle style= 
                   {{color:'white', height:'176px', background: `url(data:image/png;base64,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) center / cover`}}>Django Rest API</CardTitle>
                    <CardText> A Api created with Django, which handles all CRUD funtions relating to user profiles in the Mysqlite Server</CardText>
                    <CardActions border>
                    < Button colored a href='https://github.com/kolikay/profiles-rest-api' target="_blank">GitHub</Button>
                    
                    </CardActions>
                    {/* <CardMenu style={{color: 'white'}}>
                    <IconButton name='share'/>
                    </CardMenu> */}

                </Card>

                  {/* Django Project 2 */}
                  <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                  <CardTitle style= 
                  {{color:'white', height:'176px', background: `url(data:image/png;base64,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) center / cover`}}>Books Sales Website</CardTitle>
                  <CardText> A booksales website made with django, that allows authors of book places thiers books online for sales</CardText>
                  <CardActions border>
                        < Button colored a href='https://github.com/kolikay/book_sales_website' target="_blank">GitHub</Button>
          
                  </CardActions>
                  {/* <CardMenu style={{color: 'white'}}>
                  <IconButton name='share'/>
              </CardMenu> */}

              </Card>

                {/* Django Project 3 */} 
                <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                    <CardTitle style= 
                    {{color:'white', height:'176px', background: `url(data:image/png;base64,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) center / cover`}}>Personal Blog</CardTitle>
                    <CardText>A personal blog project, wherre only admin can share post. registered users can only comment and submit posts to admin </CardText>
                    <CardActions border>
                    < Button colored a href='https://github.com/kolikay/Personal-Blog-Project' target="_blank">GitHub</Button>
  
                    </CardActions>
               

                </Card>
                </div>



            )
        }else if (this.state.activeTab === 3){
            return(


                <div className="projects-grid">
                {/* angular Project 1 */}
                <Card shadow={5} style={{maxHeight:'300px', margin: 'auto',marginBottom:'20px'}}>
                    <CardTitle style= 
                   {{color:'grey', height:'176px', background: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAvVBMVEX///+1LjHiMje0KCu0Ky6xFBmyHiLdMTayLjH68PC6QUPaoaKxGh7CW1ywEBb04eLsz9D26OjoxcW9SUvjubrKdHXFY2SyHiGzIyfhKC7iLjPhHyb89vbgGiHdqqu6PD/kRUnv19f40dL0vb7xqqvTjo+tAADIb3HQhYavAAnsiYvjPEHcpabMenzrzMzuk5XAU1XpbnHXmJr2yMnreHvztLbnWl7vjY/gEBrkvb7vnZ/oZGfRiovmUVXrgILGaUuGAAAH/0lEQVR4nO2aC1vaOhiAW3ORS0lBoAQoMFBuKg7Z5nTH7f//rJOkTZq09ZwHTyc7+r3PNkcvkLwmX74vxfMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4B1Qj0/dghMTf/k6rD23T92ME7L4dTYZnvuczD6ohvnnm8lwdHZ2XvN9LDQs56du0RvTufqkBJwlDvxEwyE8dbvejPjbw2ScCMgcSA2UfRANl/eWAMEI+xlCQ6PZOXUTfy+LX8PJ8Mxm+H1vS1Aa9rfvVoOKgmc5HjtPxM+BBqw1fY8aLk0UdIbBvefNcF6C1ECiU7e4en6MCwLkMFh43jQoOhAWuqducfVcljkY/RRnYlwyEHzeP3WLq2cxKXEwuZSnmoMyB8tTt7h6OiUORjfqVMxLBkIwfdv2Td8gT41L5sL4Kjm3pEUH5O73t8lmtnuDDxkVVoXRMK2bOyVRkeiMMa7ny2txxD3Qmbfb89BcVbhBHyjcmHHHBu65uB4nVFncPxQcjD/rcztejAf6ow8rxt1mdLerrL3xNBowRghhxN/15JHOajtzrn9arSJ940ujK0L04BzwmYHgXUUT5WshPxqbPCgs5EnY1+ea1Oct551aiBgHSxYgHhAi/9CBuqlDsLuuXgTpIiNufKFID5n1iYoG9ukggWO+PZTfdySf8w6GX+XhS6V4nR8IaK/vEw78wGlC5qDeDTBF/V47DMN277nxkgP0bw42HOGgZx9pYH6YKm43PvK3F/+l75qrfFCcqN4/rOW/8/xAyNID4QD7xG6CcRA3OA4O1kRRMeQVDuKAL2eZdkkDMzNM4y5yT76WLzkHo79Uqx+T4Bch1wE16UGT4hbH2IpYxsFmgHmxU69w0Byw+pI6J4WDrI6/CHx2VGdfIJ8kTb7Io9dDrhalu9xAyAZmkwZPO2qHBO1ATGLyVPygVzio8cjrML62DjkOQuGgiuWh/ugOA5kmi6zhvBaoMbd3B0KWHggHPW+Ggixv1A4OFJUVVsc76AXsTg7FwNrBKTg4srvluHNh/E0euxIO+Eb+L1dCm/QgcTAPMDMhQTvoYlIWqY53sEc1eRmhz9kxx0GTolbxtldw5mwfnamx9Wl0XvOp6pFbQgdm6CkH3pRgqmNU6iAmmJflPEc7aJNBU7UAoWzA2w5CjrfVpK1/2Q7GP+QhESOkAzXMnRIaI3Nb4sDrU1NNpw5Chkvr66MdrDlTLpuD4NYctBz0OGYVVXC/7ARhrD71figdpL9OZA0EaylKHcQzNNh4uivyhjYpH6DHOugESVj26gHOEkztYH6YEb69Ld72KuwkaXgtj4SPw+GQc55YvrVKaJ5VMKkDmUtue7or0sFdRQ6WlKWp8I5nASZ1sGKUk35lG3vfrKA4UY6/XH///nkpka9iazJk6YFxIEKCn6QtL40DUeDIH0c6iJGZZHPrHVMHzEfrFwut47ESBLmNWMQqoa281TiQIaEhf74QD8IVeU2uPA3kVkU4l4iO6+oodbAW6VmF27th5mCyKLugzkrSA8uBCNx059nrArITl5Ak0/nImqmBZFm6SgrELEdPHcQiPFeSJifExkGSHxXZmMrJWZuNA5kYTrP8oIGdLoWBcdBw3rang16Zgwsi85Peiii4z9KRr2Nim/lBhdt6JiYm24hFOmYgWJmp5cCbMixyOe1gw/nGuls7iCmmTmLbpOnmZJmDCMm+duYJO663EczauBQ5YiVFo+JnmiCMztXL+5tPkoaipj6wrwcCt3tgBQcVErQD8Sui1lzVDmT+6HS1hQKzoOQdzJkTWOci70r+l+UHXeRUbP+N+3QgJNuI4WQkOccKuklaVEgPXAcqJES6bmw5Ja1x8MyRXf2IZH/bSa8vOBDLobNtIHwlm7mZA3E/r+yBz7V2oEZqmi7o587J8E1LaPvhgutAZAniktSBiIK8ZX5FxoEMG9Yte6RLq6IDkRb5zrzp6Tex8kSxKJPmazudI91FGaptxPjM+f6Bn6Sp7WQg2Ht7rgOvJ6/Q+0hPW4zoIZ0PxoG3CXyyTLvW7opkP71COMhtDB4ozQU8jJlak+x6IRKhsqIdxfRR06Nq0WW6SmgHafuTEtrudc6Bt6OZA++ODzAlfrTb9LvcN6luJCqsIFoeDrsZQcjsg4m5E/XXhmeZn5PcNx6WaUFuO6iLiFCrxkGSJA1/qRd6m9l8ByMJvhcslx54TcIcB16Do62ZAPEBEco5FX85ZWZNFOLE68GAioN705cWRXqfVED2Yp2h+ZneYWgrb5jxrbWPxFCw9qogedSUpMmh3lExDtL43JWVE7PCfa/VcpemsBW17DncPvS7s9qs229akz3ubbrinWfRwRrEu8hh4/WjVqEm3kUtOfnX0d5qxKEV7SupntWjptFDPZwvFqaIzL6Lw+46nXo8pW568N64URImEpMvZQ78QD4qEfEAB7N/f6//K/XrceFBi+VA14yoqmr9zyS8n4z+2QEPlu93IqQsHlwLrgPEqtuv+JO5vBm/4ACz1of5tuqVFRas72gGs+rqsz+f+PqxsDZS+sbfPDk54f2jUy9w9v5DYZHFTxUclYOPEgqLiOA4kg4Q+TihsMjVaHzuB92PFAqL1L+Pax8tFBYJP2AoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA34G/R5pUn5b5WmQAAAABJRU5ErkJggg==) center / cover`}}>Scrumy App</CardTitle>
                    <CardText> This is like a todo App, it manaes users entries. users sets weeks goals, which is monitored by the quality assurace and moved to verified and done column </CardText>
                    <CardActions border>
                    < Button colored a href='https://github.com/kolikay/scrum-master' target="_blank">GitHub</Button>
                       
                    </CardActions>
                    {/* <CardMenu style={{color: 'grey'}}>
                    <IconButton name='share'/>
                    </CardMenu> */}

                </Card>

                 
                </div>
            )
        }
        
    }
    render() {
        return (
            <div className="projects" id='projects'>
                <h2 style={{fontFamily:'Balsamiq Sans'}} className='d-flex justify-content-center'>Few Projects</h2>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Django</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
               
                    <Grid >
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                        
               
            </div>    
        );
    }
}
export default Project