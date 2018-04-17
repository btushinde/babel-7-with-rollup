import main from './main';
import {rewire} from './foo';

rewire(function(a) {
    console.log(a);
});

main(2);
