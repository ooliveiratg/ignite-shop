
import { styled } from "..";

export const HomeContainer = styled("main",{
    display: "flex",
    backgroundColor:"",
    width: "100%",
    maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
    marginLeft: "auto",
    minHeight: "656px",

})

export const Product = styled("a",{
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    
    img:{
        objectFit: "cover",
    },
   footer:{
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    borderRadius: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    transform: 'translateY(110%)',
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong:{
    fontSize: "$lg",
    color: "$gray100"
   },

   span:{
    fontSize: "$xl",
    fontWeight: "bold",
    color: "$white",
   }

   },
    "&:hover": {
        footer:{
            transform: 'translateY(0%)',
            opacity: 1,
        }
    },
 
   
})