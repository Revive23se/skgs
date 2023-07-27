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

export function homeWithPartials(req, res) {
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

