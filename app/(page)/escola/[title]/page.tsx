'use client';

import Detail from "@/components/dashboard/detail";

const escolaDetail = (title: any) => {
    
    const decode_title = decodeURIComponent(title.params.title);
    
    return (
    <main className="flex min-h-screen flex-col bg-[#f6f7f8]">
        <Detail title = {decode_title} />
    </main>
    )
}

export default escolaDetail;