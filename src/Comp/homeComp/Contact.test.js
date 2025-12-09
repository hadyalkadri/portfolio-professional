
import Contact from "./Contact";
import renderer from 'react-test-renderer';


describe('Contact', () => {
    it('stores the name in state', ( ) => {
        
        // const contactComp = renderer.create(<Contact />);
        // const instance = contactComp.root;
        // const nameStateInstance = instance.findByProps({state: 'name'});
        // nameStateInstance.setName('Hady');
        // expect(nameStateInstance.state.name).toBe('Hady')
        const contactComp = renderer.create(<Contact />).getInstance();
        
        const testState = contactComp.setName('Hady');
        expect(testState).toBe('Hady');
      

    })
});

