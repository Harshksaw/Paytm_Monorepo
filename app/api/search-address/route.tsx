import { NextResponse } from "next/server";

export async function GET(request: any) {
    const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';
    const { searchParams } = new URL(request.url);

    const searchText = searchParams.get('q');

    const params = new URLSearchParams({
        q: searchText || '', // Ensure searchText is never null or undefined
        language: 'en',
        limit: '1',
        session_token: '[GENERATED-UUID]',
        proximity: '-83.748708,42.265837',
        country: 'US',
        access_token: process.env.NEXT_PUBLIC_MAPBOX_API_KEY || ''
    });

    const res = await fetch(`${BASE_URL}?${params}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const searchResults = await res.json();
    console.log(searchResults);
    return NextResponse.json({ data: searchResults });
}
