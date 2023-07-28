import axios from "axios";

const BASIC_VIEW = 'home';
const BASIC_VIEW_WITH_PARTIALS = 'homeWithPartials';

export function home(req, res) {
  const context = {
    layoutData: {
      title: 'Skraag app',
      meta: {
        author: 'Charles Emakpor',
        description: '',
        keywords: '',
        robots: '',
      },
    },
  };

  res.render(BASIC_VIEW, context);
}

export  function homeWithPartials(req, res) {

  const esp32Ip = "192.168.5.4";
  // const context = {
  //   layoutData: {
  //     title: 'My Basic Example',
  //     meta: {
  //       author: 'Charles Emakpor',
  //       description: '',
  //       keywords: '',
  //       robots: '',
  //     },
  //   },
  // };

  // res.render(BASIC_VIEW_WITH_PARTIALS, context);

  // const a = axios
  
    const link =  "http://"+esp32Ip+"/"+req.query.device+"/"+req.query.act;
    // https://api.neoscan.io/api/main_net/v1/get_all_nodes
    console.log("the link is ", link);

    try{
      axios.get(link)
            .then((data)=> {
              // res.status(200).send(data)
              console.log(data);
              // res.status(200).send(data);
            })
            .catch( (err)=>{
              console.log(err);
            });
  }
  catch(err){
      console.error("GG", err);
  }
  res.send("hi");
}

export function control(req, res) {
  // const context = {
  //   layoutData: {
  //     title: 'My Basic Example',
  //     meta: {
  //       author: 'Charles Emakpor',
  //       description: '',
  //       keywords: '',
  //       robots: '',
  //     },
  //   },
  // };

  // res.render(BASIC_VIEW_WITH_PARTIALS, context);

  res.send("hi");
}

