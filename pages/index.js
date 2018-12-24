//This is the link API
import Link from 'next/link'
import PageHeader from '../components/PageHeader'

// react component
const Index = () => (
<div>
    <PageHeader title="Craft kits : working title" />
    {PageHeader({ text: 'hello' })}
<p>Craft kit Site (kits designed and (or) curated by me (percentage of proceeds goes to  The Robert Owen Nursery School) </p>
<Link href="/about">
    <button>Go to About Page</button>
</Link>
</div>
)



//export component here - for homepage
export default Index

