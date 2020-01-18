import { asyncThing } from './helpers/asyncThing';

describe('asyncThing function', () => {
    it('eventually resolves to 7', async () => {
        const response = await asyncThing(Function.prototype);
        expect(response).toBe(7);

        asyncThing(Function.prototype).then((res) => {
            console.log("inside async test")
            console.log(res)
        });
    });
  });

  