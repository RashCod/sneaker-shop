import React from "react"
import ContentLoader from "react-content-loader"

const FullProductSkeleton:React.FC = () => (
    <div className="fullProdBlock">
    <ContentLoader 
    speed={2}
    width={600}
    height={300}
    viewBox="0 0 600 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="54" rx="16" ry="16" width="286" height="198" /> 
    <rect x="331" y="85" rx="0" ry="0" width="1" height="0" /> 
    <rect x="313" y="94" rx="10" ry="10" width="269" height="45" /> 
    <rect x="319" y="160" rx="9" ry="9" width="78" height="35" /> 
    <rect x="329" y="210" rx="0" ry="0" width="0" height="1" /> 
    <rect x="320" y="203" rx="10" ry="10" width="117" height="32" />
  </ContentLoader>
  </div>
)


export default FullProductSkeleton