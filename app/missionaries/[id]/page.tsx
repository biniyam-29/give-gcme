import { notFound } from "next/navigation";
import MissionaryDetail from "./missionary-detail";

interface PageProps {
  params?: Promise<{ id: string }>;
  searchParams?: Promise<any>;
}

async function getMissionary(id: string) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/admin/missionaries`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch missionaries");
    }

    const data = await response.json();
    const missionary = data.missionaries?.find((m: any) => m.id === id);

    return missionary || null;
  } catch (error) {
    console.error("Error fetching missionary:", error);
    return null;
  }
}

export default async function MissionaryDetailPage({ params }: PageProps) {
  const { id } = (await params) || {};

  if (!id) {
    notFound();
  }

  const missionary = await getMissionary(id);

  if (!missionary) {
    notFound();
  }

  return <MissionaryDetail missionary={missionary} />;
}
