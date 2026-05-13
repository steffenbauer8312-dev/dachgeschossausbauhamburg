import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { lazy, Suspense } from 'react'

// Lazy load pages (will be implemented in later tasks)
const HomePage = lazy(() => import('./pages/HomePage'))
const LeistungenPage = lazy(() => import('./pages/LeistungenPage'))
const DachgeschossausbauPage = lazy(() => import('./pages/DachgeschossausbauPage'))
const DachgaubenPage = lazy(() => import('./pages/DachgaubenPage'))
const DaemmungPage = lazy(() => import('./pages/DaemmungPage'))
const InnenausbauPage = lazy(() => import('./pages/InnenausbauPage'))
const ProzessPage = lazy(() => import('./pages/ProzessPage'))
const KostenPage = lazy(() => import('./pages/KostenPage'))
const GenehmigungPage = lazy(() => import('./pages/GenehmigungPage'))
const ProjektePage = lazy(() => import('./pages/ProjektePage'))
const UeberUnsPage = lazy(() => import('./pages/UeberUnsPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const KontaktPage = lazy(() => import('./pages/KontaktPage'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-slate-600">Laden...</div>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/leistungen" element={<LeistungenPage />} />
            <Route path="/leistungen/dachgeschossausbau" element={<DachgeschossausbauPage />} />
            <Route path="/leistungen/dachgauben" element={<DachgaubenPage />} />
            <Route path="/leistungen/daemmung" element={<DaemmungPage />} />
            <Route path="/leistungen/innenausbau" element={<InnenausbauPage />} />
            <Route path="/prozess" element={<ProzessPage />} />
            <Route path="/kosten" element={<KostenPage />} />
            <Route path="/genehmigung" element={<GenehmigungPage />} />
            <Route path="/projekte" element={<ProjektePage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}