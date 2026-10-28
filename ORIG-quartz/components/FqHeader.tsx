import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FqHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  return (
    <div class="fq-header">
      <a href="/" class="fq-brand">
        <img src="/static/fq-avatar.webp" alt="Faisal Qureshi" class="fq-avatar" />
        <div>
          <div class="fq-name">FAISAL QURESHI</div>
          <div class="fq-tag">A digital garden of mostly nothing</div>
        </div>
      </a>
      <nav class="fq-nav">
        <a href="/">Home</a>
        <a href="/me">About</a>
        <a href="/me/contact">Contact</a>
        <a href="/settings">Settings</a>
      </nav>
    </div>
  )
}

export default (() => FqHeader) satisfies QuartzComponentConstructor
