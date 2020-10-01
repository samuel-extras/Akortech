import digital from "../../Assets/images/include/digital.jpg"
import programming from "../../Assets/images/include/programming.jpg"
import maintenance from "../../Assets/images/service/3.jpg"
import design from "../../Assets/images/include/design.jpg"
import consult from "../../Assets/images/include/consult.jpg"
import printing from "../../Assets/images/include/printing.jpeg"
import f1 from "../../Assets/images/icon/f1.png"
import f2 from "../../Assets/images/icon/f2.png"
import f3 from "../../Assets/images/icon/f3.png"
import f4 from "../../Assets/images/icon/f4.png"
import f5 from "../../Assets/images/icon/f5.png"
import f6 from "../../Assets/images/icon/f6.png"
const services = [
    {
        name: " Digital Branding",
        id:1,
        description: `Digital branding is a brand management
         technique that uses a combination of internet branding 
         and digital marketing.`,
        button: "Go Branding", 
        image: digital,
        icon: f1,
        url: "/digital"
        
    },
    {
        name: " Programming",
        id:2,
        description: "programming is the process of designing and building an executable computer program to accomplish a specific Function",
        button: "Go Programming", 
        image: programming,
        icon: f2,
        url: "/program"
        
    },
    {
        name: "System Maintenance ",
        id:3,
        description: "The modification of a system to correct faults, to improve performance of the system",
        button: "Go Maintenance", 
        image: maintenance,
        icon: f3,
        url: "/maintenance"
        
    },
    {
        name: " Design",
        id:4,
        description: "Is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration.",
        button: "Go Design", 
        image: design,
        icon: f4,
        url: "/design"
        
    },
    {
        name: "System Consultation",
        id:5,
        description: "System Consulting focuses on IT coordination; Work-style reforms; Systems planning and development; Quality assurance and audits; Customer Relationship Management",
        button: "Go Consult", 
        image: consult ,
        icon: f5,
        url: "/consult"
        
    },
    {
        name: "Printing",
        id:6,
        description: "Printing is a process for mass reproducing text and images using a master form or template. such as banners,business card e.t.c",
        button: "Go Printing", 
        image: printing,
        icon: f6,
        url: "/printing"
        
    },
    

]
export default services