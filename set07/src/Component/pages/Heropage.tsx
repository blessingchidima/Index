// import React from "react"
// import styled from "styled-components"
// const Heropage=()=>{
//     return(
//         <div>
//             <Container>
//                 <Main>
//                     <Image>
//                         <Text>hujkeg</Text>
//                     </Image>
//                 </Main>
//             </Container>
//         </div>
//     )
// }

// export default Heropage
// const Text=styled.div`
// font-size:500px;

// `;
// const Container=styled.div`
// height:100%;
// width:100%;
// display:flex;
// justify-content:center;
// align-items:center;

// background-color:red;

// `;
// const Main=styled.div`
// display:flex;
// width: 98%;
// justify-content:space-between;
// align-items:center;
// `;
// const Image=styled.div`
// background-image:url(../Assets/testimonial-bg.jpg);
// `;


import React from "react";
import styled from "styled-components";
import bgI from "../../Asset/slider-3_img_1.jpg"

const Heropage = () => {
  return (
    <div>
      <Container>
        <Main>
         
          <BGImg src={bgI}/>
          
            <Text>hujkeg</Text>
         
        </Main>
      </Container>
    </div>
  );
};

export default Heropage;


const Text = styled.div`
  font-size: 300px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Main = styled.div`
  display: flex;
  width: 98%;
  padding:20px;


`;

const BGImg = styled.img`
height: 700px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;


  `;