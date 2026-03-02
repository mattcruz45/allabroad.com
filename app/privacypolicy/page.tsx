export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-slate-500">Last updated: March 1, 2026</p>
      
      <p>AllAbroad Privacy Policy
1. Data We Collect
Account Info: We collect your university email address and username to create your profile.
User Content: We store the messages and photos you post to the city feeds.
Device Info: We collect basic device info to ensure the app runs correctly.
2. How We Use Data We use your data strictly to provide the AllAbroad service. We do not sell your data to third parties.
3. Third-Party Services We use Supabase (by Google/AWS infrastructure) to securely store your data and handle authentication.
4. Data Retention & Deletion You have the right to delete your account at any time via the Settings menu in the app. Deleting your account will remove your profile and personal data from our active databases.</p>
      
      {/* Add more sections as needed */}
      
      <div className="mt-12">
        <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
      </div>
    </article>
  );
}