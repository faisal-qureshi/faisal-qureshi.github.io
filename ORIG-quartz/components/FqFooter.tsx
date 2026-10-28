import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FqFooter: QuartzComponent = () => {
  return (
    <footer class="fq-footer">
      <div class="fq-footer-inner">
        <div>
          <strong>Faisal Qureshi</strong>
          <p>© 2026 · Write slowly. Share freely.</p>
        </div>
        <div class="fq-footer-links">
          <a href="/">Home</a>
          <a href="/me/about">About</a>
          <a href="/me/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default (() => FqFooter) satisfies QuartzComponentConstructor
