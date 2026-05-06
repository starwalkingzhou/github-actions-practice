import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buildTime = __BUILD_TIME__

  return (
    <div className="app">
      <header className="hero">
        <div className="badge">
          <img
            src="https://github.com/starwalkingzhou/github-actions-practice/actions/workflows/egg.yml/badge.svg"
            alt="CI/CD Status"
          />
          <span className="badge-label">Egg CI/CD</span>
        </div>
        <h1>GitHub Actions <span className="highlight">Practice</span></h1>
        <p className="subtitle">
          持续集成 &amp; 持续部署 — 从代码推送的那一刻，一切自动化。
        </p>
        <div className="hero-links">
          <a
            href="https://github.com/starwalkingzhou/github-actions-practice"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            查看仓库
          </a>
          <a
            href="https://github.com/starwalkingzhou/github-actions-practice/actions"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            运行记录
          </a>
        </div>
      </header>

      <section className="demo">
        <h2>试试看</h2>
        <p>这是一个 React 交互组件，验证构建产物是否正常工作。</p>
        <button
          className="counter-btn"
          onClick={() => setCount((c) => c + 1)}
        >
          点击次数：{count}
        </button>
      </section>

      <section className="pipeline">
        <h2>CI/CD 流水线</h2>
        <div className="steps">
          <div className="step">
            <span className="step-icon">📦</span>
            <strong>代码推送</strong>
            <p>push 到 main 分支，触发 egg.yml</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-icon">🛠️</span>
            <strong>构建</strong>
            <p>Vite + React 编译产出 dist</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-icon">📤</span>
            <strong>上传产物</strong>
            <p>upload-pages-artifact</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-icon">🚀</span>
            <strong>部署</strong>
            <p>deploy-pages → GitHub Pages</p>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>技术栈</h2>
        <div className="tags">
          <span className="tag">React 19</span>
          <span className="tag">Vite 6</span>
          <span className="tag">GitHub Actions</span>
          <span className="tag">GitHub Pages</span>
        </div>
      </section>

      <footer className="footer">
        <p>
          构建时间：{buildTime}
        </p>
      </footer>
    </div>
  )
}

export default App
