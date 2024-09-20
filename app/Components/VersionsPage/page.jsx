"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const VersionsPage = () => {
  const singleSearch = useSelector((state) => state.search?.singleSearch);
  const router = useRouter();

  // Ensure that singleSearch and relevant fields are present
  if (!singleSearch) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const { versions, "dist-tags": distTags, time } = singleSearch;

  return (
    <div className="container mx-auto p-6">
      {/* Current Tags */}
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Current Tags</h2>
      <div className="mb-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 text-gray-600 font-medium">Version</th>
              <th className="text-left p-4 text-gray-600 font-medium">Downloads (Last 7 Days)</th>
              <th className="text-left p-4 text-gray-600 font-medium">Tag</th>
            </tr>
          </thead>
          <tbody>
            {distTags && (
              <tr className="hover:bg-gray-50">
                <td
                  className="p-4 hover:cursor-pointer hover:underline"
                  onClick={() =>
                    router.push(`/Components/Packages/${singleSearch.name}/${distTags.latest}`)
                  }
                >
                  {distTags.latest}
                </td>
                <td className="p-4">
                  {versions?.[distTags.latest]?.downloads || "N/A"}
                </td>
                <td className="p-4">latest</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Version History */}
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Version History</h2>
      <div>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 text-gray-600 font-medium">Version</th>
              <th className="text-left p-4 text-gray-600 font-medium">Downloads (Last 7 Days)</th>
              <th className="text-left p-4 text-gray-600 font-medium">Published</th>
            </tr>
          </thead>
          <tbody>
            {versions &&
              Object.keys(versions).map((version) => (
                <tr key={version} className="hover:bg-gray-50">
                  <td
                    className="p-4 hover:cursor-pointer hover:underline"
                    onClick={() =>
                      router.push(`/Components/Packages/${singleSearch.name}/${version}`)
                    }
                  >
                    {version}
                  </td>
                  <td className="p-4">
                    {versions[version]?.downloads || "N/A"}
                  </td>
                  <td className="p-4">
                    {time?.[version]
                      ? new Date(time[version]).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VersionsPage;