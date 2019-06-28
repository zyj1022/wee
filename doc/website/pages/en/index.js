/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPa  = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
          <div className="home-effect">
            <img src={`${baseUrl}img/home-effect.svg`} />
          </div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} />
      </div>
    );

    const Button = props => (
      <div className="btn-area">
        <a className="btn-start" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_data_trends.svg`} />
        <div className="inner">
            <div className="slog">响应式前端开发框架，功能组件让web开发更快速，更简单</div>
           <Button>快速开始</Button>
           <div className="title-area">特性 Features</div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: '支持多端适配，移动端响应式适配，快速上手',
            image: `${baseUrl}img/undraw_11.svg`,
            imageAlign: 'top',
            title: '',
          },
          {
            content: '多种栅格化方式、Flex布局，快速搭建网站基本框架',
            image: `${baseUrl}img/undraw_12.svg`,
            imageAlign: 'top',
            title: '',
          },
          {
            content: '集成多种基础布局组件，代码可以复用，功能开发更清晰',
            image: `${baseUrl}img/undraw_13.svg`,
            imageAlign: 'top',
            title: '',
          },
        ]}
      </Block>
    );
    /*
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };
    */
    // <FeatureCallout />
    // <LearnHow />
    // <TryOut />
    // <Description />
    // <Showcase />

    const Showcase = () => {
      return (
        <div className="wee-demos">
          <h2>演示 Demos</h2>
          <div className="wee-container">
    					<div className="wee-row">
    						 <div className="wee-col-12">
    							  <div className="case-box">
    									<a href="#" className="item type-1">
    										<img className="case-img" src={`${baseUrl}img/case_1.png`} alt="" />
    									</a>
    							  </div>
    						 </div>
    						 <div className="wee-col-12">
    							 <div className="case-box">
    								 <a href="#" className="item type-2">
    									 <img className="case-img" src={`${baseUrl}img/case_2.png`} alt="" />
    								 </a>
    							 </div>
    						 </div>
    					</div>
    			</div>
        </div>
      );
    };

    return (
      <div className="wee-main">
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
