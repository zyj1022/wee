/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Resource</h5>
            <a href="https://github.com/weeui/weekit" target="_blank">WeeKit——Web UI组件设计库</a>
            <a href="https://github.com/weeui/react-wee" target="_blank">React-wee——React版本组件库</a>
            <a href="https://github.com/zyj1022/muss" target="_blank">Muss——基础SASS库，快速编写CSS样式</a>
            <a href="https://github.com/zyj1022/zebra" target="_blank">Zebra——前端JS基础类库</a>
            <a href="#" target="_blank">Universal-website——通用建站模板</a>
            <a href="https://github.com/zyj1022/rainbow" target="_blank">Rainbow——Web渐变配色方案</a>
          </div>
          <div>
            <h5>Charts</h5>
            <a href="http://zyj1022.github.io/demos/react-echarts-packet/" target="_blank">React-echarts-packet</a>
            <a href="http://zyj1022.github.io/demos/rechartjs/" target="_blank">Rechartjs</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/zyj1022">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/wee-logo.svg`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
