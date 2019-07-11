import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/addQuestion').default);
app.model(require('./models/checkTheItem.js').default);
app.model(require('./models/getQuestionsType').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
