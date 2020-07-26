import React from "react";
import Layout from "components/Layout";
import Container from "components/Container";


const ThirdPage = () => {
  return (
    <Layout>
      <Container type="content" className="">
        <h2>Σχετικά με την πλατφόρμα Refugee Camps Greece - Covid19</h2>
        <p>Η πλατφόρμα Refugee Camps Greece - Covid19 αποτελεί ένα εργαλείο διερεύνησης και οπτικοποίησης δεδομένων που σχετίζονται με την εξάπλωση της πανδημίας του κορωνοϊού, COVID-19, στις δομές φιλοξενείας αιτούντων άσυλο στην Ελλάδα. Τα δεδομένα συλλέγονται από αξιόπιστες πηγές (βλέπε "Πηγές Δεδομένων") σε σχεδόν πραγματικό χρόνο.
        </p><br></br>
        <h2>Εθελοντική Δραση Covid19 Response Greece</h2>
        <p>Η COVID-19 Response Greece είναι μία εθελοντική δράση που συγκροτήθηκε κατά την εμφάνιση του COVID-19 στην Ελλάδα, μέσα από την κοινότητα του OK!Thess στη Θεσσαλονίκη, με σκοπό να προσφέρει πρακτικές και άμεσα εφρμόσιμες λύσεις σε κρίσιμα προβλήματα που προξενεί η πανδημία. Σήμερα, αριθμεί περισσότερα από 270 μέλη, με επιστημονικό και τεχνολογικό υπόβαθρο, στην Ελλάδα και το εξωτερικό, που συνδράμουν σε 8 projects.
        </p><br></br>
        <h2>Ιστοσελίδα:</h2><a href="https://covid19response.gr/">https://covid19response.gr/</a>
        <p>Η παρούσα δικτυακή εφαρμογή αναπτύσσεται από την ομάδα εθελοντών του project "Συλλογή & Διάθεση Δεδομένων" (<a href="https://covid19response.gr/project5.html">https://covid19response.gr/project5.html</a>), μεταξύ άλλων τεχνολογικών λύσεων.</p>
        <br></br>
        <h2>Πηγές δεδομένων</h2>
        <p>Τα δεδομένα παρέχονται μέσω της ανοικτής υπηρεσίας δεδομένων για την εξάπλωση του COVID-19 στην Ελλάδα, 🔗<a href="https://covid-19-greece.herokuapp.com/">Coronavirus Greece API</a>, που αναπτύσσεται, επίσης, από ομάδα εθελοντών της 🔗<a href="https://covid19response.gr/">Covid-19 Response Greece</a>. Το σύνολο των δεδομένων προέρχεται από αναφορές του 🔗<a href="https://eody.gov.gr/">Εθνικού Οργανισμού Δημόσιας Υγείας</a> (ΕΟΔΥ), ενισχυμένες με δεδομένα από δημοσιογραφικά άρθρα, όπου είναι απαραίτητο. Την επιστημονική αρτιότητα και την αξιοπιστία των δεδομένων εγγυάται το 🔗 <a href="https://www.uoa.gr/">Εθνικό Καποδιστριακό Πανεπιστήμιο Αθηνών</a> (ΕΚΠΑ).</p>
        <br></br>
        <h2>Προτάσεις και Συζήτηση</h2>
        <p>Αν αντιμετωπίζετε οποιοδήποτε ζήτημα ή αν έχετε πρότάσεις για τη βελτίωση ή τον εμπλουτισμό του περιεχομένου, μπορείτε να δημιουργήσετε ένα 🔗 <a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map/issues/new">νέο ζήτημα (new issue)</a> στον ανιχνευτή ζητημάτων μας (Issue Tracker) στο GitHub.</p>
        <br></br><br></br>
        <h2>Αδειοδότηση</h2>
        <p>Οι εμπνευστές της συγκεκριμένης πρωτοβουλίας είναι υπέρμαχοι της νοοτροπίας ανοιχτού κώδικα και ανοιχτών δεδομένων, καθώς πιστεύουν στα θεμελιώδη οφέλη της στην ανοιχτή επιστημονική έρευνα. Αυτή η πλατφόρμα χρησιμοποιεί ανοιχτά σύνολα δεδομένων, βασίζεται σε τεχνολογίες ανοιχτού κώδικα και κυκλοφορεί στο κοινό με άδεια πνευματικών δικαιωμάτων European Union Public License 1.2. Μπορείτε να βρείτε όλο τον σχετικό πηγαίο κώδικα στη σελίδα του 🔗<a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map">project μας στο Github</a>.</p>
      </Container>
    </Layout>
  );
};

export default ThirdPage;