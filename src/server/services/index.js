export default [
    {
      path: '/api/v1/homecards',
      method: 'get',
      handler: [
        async (req, res) => {
          res.status (200).send ({});
        },
      ],
    },
  ];