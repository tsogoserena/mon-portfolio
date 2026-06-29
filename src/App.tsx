
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Portfolio from "./pages/Home"

const App = () => {
  
  return (
  //  <AuthProvider>
       <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainLayout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="RolesPermissions" element={<RolesPermissions />} />
          <Route path="Modules ERP" element={<ModulesERP />} />
        
         
        </Route>
         */}

        {/* Routes d'authentification */}
        
  
        <Route path="home" element={<Portfolio />} />
    

         
        {/* <Route path="/finance" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path= "factures" element= {<FacturationPage /> }/>
          <Route path="tresorerie" element={<TresorerieLive />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="rapports" element={<AnalyseRapports />} />
          <Route path="paiements" element={<PaimentsPage />} />
          <Route path="ia" element={<IAScanFinancier />} />
        </Route> */}

        {/* <Route path="/logistique" element={<Layout />}>
          <Route index element={<DashboardL />} />
          <Route path= "alerte" element= {<Alertes /> }/>
          <Route path="shipments" element={<ShipmentsPage />} />
          <Route path="package" element={<PackagesQRPage />} />
          <Route path="lta" element={<LTABookingPage />} />
          <Route path="entrepot" element={<GestionEntrepotPage />} />
          <Route path="dossier" element={<GestionDossier />} />
          <Route path="planning" element={<PlanningTransportPage />} />
          <Route path="historique" element={<HistoriqueStatutsPage />} />
          <Route path="couts" element={<Marges />} />
          <Route path="parametre" element={<Paramètres />} />
        </Route> */}

        {/* <Route path="/crm" element={< TestLayout/>} >
        <Route path="/crm" element={< Layout/>}>
        <Route path= 
            <Route index element={<DashboardC />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="pipeline" element={<Pipeline />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="quotes" element={<Devis />} />
            <Route path="messages" element={<Messages />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Paramètres />} />
            <Route path="alerte&tache" element={<AlertsTasksPage />} />
        </Route> 
       */}

        {/* Page non trouvée */}
        {/* <Route path="/hr/*" element={<HRPortal />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="chat" element={<RequireAuth><ChatPage /></RequireAuth>}/> */}
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        {/* <Route path="/DashboardKPI" element={<DashboardKPI />} />  */}
      </Routes>
      
    </BrowserRouter>
  //  </AuthProvider> 
  );
};

export default App;

