import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class App extends React.Component{
  render() {
    return (
      <div>
        <header>
          <span id="Logo-nav"></span>
          <div className="container">
            <nav className="container-space-between">
              <ul className="inline" id="btn-group">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/service">服务内容</Link></li>
                <li><Link to="/work">作品案例</Link></li>
                <li><Link to="/support">技术支持</Link></li>
                <li><Link to="/about">关于我们</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="detail">
          {this.props.children}
        </div>
        <footer>
          <ul className="container-space-between" id="sitemap">
            <li className="list-group">
              <p>服务</p>
              <ul>
                <li><Link to="/">产品开发</Link></li>
                <li><Link to="/">策划与运营</Link></li>
                <li><Link to="/">影视传播</Link></li>
              </ul>
            </li>
            <li className="list-group">
              <p>产品</p>
              <ul>
                <li><Link to="/">Web应用</Link></li>
                <li><Link to="/">App应用</Link></li>
                <li><Link to="/">影视广告</Link></li>
                <li><Link to="/">策划运营</Link></li>
                <li><Link to="/">动漫游戏</Link></li>
              </ul>
            </li>
            <li className="">
              <div className="title-center">
                <span id="Logo-footer"></span>
                <small>中国 光谷</small>
              </div>
            </li>
            <li className="list-group">
              <p>支持</p>
              <ul>
                <li><Link to="/">帮助与支持</Link></li>
                <li><Link to="/">问题搜索与解答</Link></li>
                <li><Link to="/">常见问题</Link></li>
                <li><Link to="/">联系我们</Link></li>
              </ul>
            </li>
            <li className="list-group">
              <p>关于</p>
              <ul>
                <li><Link to="/">关于九千年</Link></li>
                <li><Link to="/">九千年新闻</Link></li>
                <li><Link to="/">招贤纳士</Link></li>
                <li><Link to="/">网站地图</Link></li>
              </ul>
            </li>
          </ul>
          <div className="container-center">
            <span className="title-center">
              <small>
                © 2015 9000Y.Inc All Rights Reserved
                <br/>鄂ICP备09042378号-6 鄂公网安备11010802010597
                <br/>
                <span className="CW">
                  CW Studio/ 酷世工作室</span>
              </small>
            </span>
          </div>
        </footer>
      </div>
    )
  }
}

export {App};