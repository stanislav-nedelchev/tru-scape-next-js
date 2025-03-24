'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  // params: { id: string };
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);

  return (
    <PromotionFormModal
      // companyId={params.id}
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
