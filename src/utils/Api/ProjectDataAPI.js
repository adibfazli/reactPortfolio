import Arcadi1 from "../../imageAndFont/images/arcadia1.png";
import Arcadi2 from "../../imageAndFont/images/arcadia2.png";
import Arcadi3 from "../../imageAndFont/images/arcadia3.png";
import Arcadi4 from "../../imageAndFont/images/arcadia4.png";
import Arcadi5 from "../../imageAndFont/images/arcadia5.png";
import Zart1 from "../../imageAndFont/images/zart1.png";
import Zart2 from "../../imageAndFont/images/zart2.png";
import Zart3 from "../../imageAndFont/images/zart3.png";
import Junkie1 from "../../imageAndFont/images/junkie1.png";
import Junkie2 from "../../imageAndFont/images/junkie2.png";
import Junkie3 from "../../imageAndFont/images/junkie3.png";
import Junkie4 from "../../imageAndFont/images/junkie4.png";
import Junkie5 from "../../imageAndFont/images/junkie5.png";
import Browbrow1 from "../../imageAndFont/images/brow1.png";
import Browbrow2 from "../../imageAndFont/images/brow2.png";
import Browbrow3 from "../../imageAndFont/images/brow3.png";
import Browbrow4 from "../../imageAndFont/images/brow4.png";
import Browbrow5 from "../../imageAndFont/images/brow5.png";
import Youpick1 from "../../imageAndFont/images/youpick1.png";
import Youpick2 from "../../imageAndFont/images/youpick2.png";
import Youpick3 from "../../imageAndFont/images/youpick3.png";
import Youpick4 from "../../imageAndFont/images/youpick4.png";
import Youpick5 from "../../imageAndFont/images/youpick5.png";
import TrapSweeper1 from "../../imageAndFont/images/trapSweeper1.png";
import TrapSweeper2 from "../../imageAndFont/images/trapSweeper2.png";
import TrapSweeper3 from "../../imageAndFont/images/trapSweeper3.png";
import TrapSweeper4 from "../../imageAndFont/images/trapSweeper4.png";
import TrapSweeper5 from "../../imageAndFont/images/trapSweeper5.png";
// Logo
import MongoDbLogo from "../../imageAndFont/images/tech/mongodb.png";
import JsLogo from "../../imageAndFont/images/tech/js.png";
import ExpressLogo from "../../imageAndFont/images/tech/express.png";
import GoogleLogo from "../../imageAndFont/images/tech/google.png";
import NodeLogo from "../../imageAndFont/images/tech/node.png";
import ReactLogo from "../../imageAndFont/images/tech/react.png";
import DjangoLogo from "../../imageAndFont/images/tech/django.png";
import MaterializeLogo from "../../imageAndFont/images/tech/materialize.png";
import PythonLogo from "../../imageAndFont/images/tech/python.png";
import HtmlLogo from "../../imageAndFont/images/tech/html.png";
import CssLogo from "../../imageAndFont/images/tech/css.png";
// Emoji
import Plan from "../../imageAndFont/images/emoji/plan.png";
import Dmv from "../../imageAndFont/images/emoji/dmv.png";
import Search from "../../imageAndFont/images/emoji/search.png";
import More from "../../imageAndFont/images/emoji/more.png";


const Projects = [
        {
            name:'Arcadiacars.com',
            gitHub:'https://github.com/adibfazli/Zart-Message',
            link:'https://zart-message.herokuapp.com/login',
            image:[Arcadi1 , Arcadi2 , Arcadi3 , Arcadi4 , Arcadi5],
            description: "This application provides automobile customers with vehicle listing, search and finance application in the most user friendly way to minimize the inconvenience of searching for a car.",
            info : [
                { 
                    img : Plan ,
                    info :"We set our goal to create the right kind of a car dealer website accentuates the odds of finding success for an agency." 
                }, 
                { 
                    img : Dmv ,
                    info :"Arcadi is a online application which allows the admin to create an inventory of vehicles on their dealership and post images, information and options of their vehicle by searching and selecting the U.S Department of Motor Vehicle list api, which provides accurate information both for the dealer and their customers."
                },
                { 
                    img : Search ,
                    info :"Arcadiacars.com allows the customer to search and filter by type, make, model, and year in order to provide them the best result in the shortest time possible."
                },
                { 
                    img : More ,
                    info :"You can find more technical detail about this application in the Technology section of Arcadiacars.com."
                }
            ],
            tech: [
                {info : "good shit" , logo : MongoDbLogo} , 
                {info : "good shit" , logo : ExpressLogo} , 
                {info : "good shit" , logo : ReactLogo} , 
                {info : "good shit" , logo : NodeLogo}
            ],
            goals: "IDK",
            technology:'./image/MERN.png',
        } ,
        {
            name:'Zart Message',
            gitHub:'https://github.com/adibfazli/Zart-Message',
            link:'https://www.arcadiacars.com/',
            image:[Zart1 ,Zart2 ,Zart3],
            description: "This project is a messaging app that is mostly backend focused with minimal visual touches, and the goal was to connect to people via real time chat using socket io",
            info : [
                { 
                    img : More ,
                    info : "hi"
                }
            ],
            tech: [
                {info : "good shit" , logo : MongoDbLogo} , 
                {info : "good shit" , logo : ExpressLogo} , 
                {info : "good shit" , logo : ReactLogo} , 
                {info : "good shit" , logo : NodeLogo}
            ],
            goals: "",
            technology:'./image/MERN.png',
        } ,
        {
            name:'Junkie',
            gitHub:'https://github.com/adibfazli/junkie',
            link:'https://collection-junkie.herokuapp.com/',
            image:[
                {info : "good shit" , logo : Junkie1} , 
                {info : "good shit" , logo : Junkie2} , 
                {info : "good shit" , logo : Junkie3} , 
                {info : "good shit" , logo : Junkie4} , 
                {info : "good shit" , logo : Junkie5}
            ],
            description: "This is a music and commic book collection organizer app which was build by group collaboration using Django.",
            info : [
                { 
                    img : More ,
                    info : "hi"
                }
            ],
            tech: [
                {info : "good shit" , logo : PythonLogo} , 
                {info : "good shit" , logo : DjangoLogo} , 
                {info : "good shit" , logo : MaterializeLogo}
            ],
            goals: "",
            technology:'./image/python.png',
        } ,
        {
            name:'Browbrow.us',
            gitHub:'https://github.com/adibfazli/junkie',
            link:'https://browbrow.us/',
            image:[ Browbrow1 , Browbrow2 ,Browbrow3 , Browbrow4 ,Browbrow5],
            description: "This website was build to be displayed at the beauty salon, and informe customers of the available services following our clients guidelines and needs.",
            tech: [
                {info : "good shit" , logo : JsLogo} , 
                {info : "good shit" , logo : HtmlLogo} , 
                {info : "good shit" , logo : CssLogo}
            ],
            info : [
                { 
                    img : More ,
                    info : "hi"
                }
            ],
            goals: "",
            technology:'./image/python.png',
        } ,
        {
            name:'You Pick',
            gitHub:'https://github.com/adibfazli/youPick',
            link:'https://youpick2.herokuapp.com/',
            image:[ Youpick1 , Youpick2 , Youpick3 , Youpick4 , Youpick5],
            description: "This was a challenge project at the time I was in bootcamp to build an application to resemble instagram close as possible.",
            info : [
                { 
                    img : More ,
                    info : "XXX"
                },
            ],
            tech: [
                {info : "good shit" , logo : JsLogo} , 
                {info : "good shit" , logo : MongoDbLogo} , 
                {info : "good shit" , logo : ExpressLogo}, 
                {info : "good shit" , logo : NodeLogo},
                {info : "good shit" , logo : GoogleLogo}
            ],
            goals: "",
            technology:'./image/MEN.png',
        } ,
        {
            name:'Minesweeper',
            gitHub:'https://github.com/adibfazli/Minesweeper',
            link:'https://adibfazli.github.io/Minesweeper/',
            image:[ TrapSweeper1 , TrapSweeper2 , TrapSweeper3 , TrapSweeper4 , TrapSweeper5],
            description: "Minesweeper doesn't need for an explanation, how ever this is minesweeper with a amall twist. I created this game using cheese and mouse trap insted of mines and square buttons.",
            info : [
                { 
                    img : More ,
                    info : "TramSweeper is a version of the classic Minesweeper game. This game is a single-player puzzle video game. The objective of the game is to clear a rectangular cheese containing hidden \"mouse traps\" without detonating any of them, with help from clues about the number of neighboring traps in each field. If a square cheese containing a trap is revealed, the player loses the game."
                },
            ],
            tech: [
                {info : "good shit" , logo : JsLogo} , 
                {info : "good shit" , logo : HtmlLogo} , 
                {info : "good shit" , logo : CssLogo}
            ],
            goals: "",
            technology:'./image/jsHtmlCss.png',
        }
    ]
export default Projects;