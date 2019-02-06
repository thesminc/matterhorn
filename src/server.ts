import * as Fastify from 'fastify'

export default function createServer(opts?: Fastify.ServerOptions) {
  const fastify = Fastify(opts)

  /* eslint-disable-next-line no-unused-vars */
  fastify.get('/', async (req, reply) => {
    return { hello: 'world' }
  })

  /* eslint-disable-next-line no-unused-vars */
  fastify.get('/user', async (req, _reply) => {
    //console.log('llll', request.query)
    let id = req.query.id;
    console.log(id);
    return { userId: req.query.id}
    
  })

    /* eslint-disable-next-line no-unused-vars */
    fastify.get('/admin/:id', async (req, _reply) => {
      //console.log('llll', request.query)
      let id = req.params.id;
      console.log(id);
      return { adminId: req.params.id }
      
    })

  return fastify
}
