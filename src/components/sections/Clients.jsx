'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Clients() {
  const { t } = useLanguage();
  const clients = t.clients?.items || [];

  if (!clients.length) return null;

  const names1 = ['Ynmal', 'Ayanz', 'etest', 'Grass', 'Pik', 'Tet', 'Somedia', 'Tumurxac', 'GBHG', 'Argun'];
  const names2 = ['Asian city', 'Enbarr', 'Global Bridge', 'pp', 'Ren', 'Aranjin', 'Toktok', 'Visahub', 'StarTV'];
  const byName = new Map(clients.map((client) => [client.name, client]));
  let row1 = names1.map((name) => byName.get(name)).filter(Boolean);
  let row2 = names2.map((name) => byName.get(name)).filter(Boolean);
  if (row1.length === 0) {
    const half = Math.ceil(clients.length / 2);
    row1 = clients.slice(0, half);
    row2 = clients.slice(half);
  }

  // Duplicate items for seamless continuous marquee loop
  const duplicateList = (arr) => [...arr, ...arr, ...arr, ...arr];

  const list1 = duplicateList(row1);
  const list2 = row2.length > 0 ? duplicateList(row2) : [];

  return (
    <section className="section clients-band" data-anim="up">
      <div className="container">
        <div className="clients-head">
          {t.clients.heading}
        </div>
      </div>

      {/* Row 1 */}
      <div className="marquee marquee-row1">
        <div className="track">
          {list1.map((client, idx) => (
            <span key={`r1-${client.id || idx}-${idx}`} className="item">
              {client.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ height: `${Number(client.height) || 26}px`, width: 'auto' }}
                />
              ) : (
                client.name
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 (Reverse) */}
      {list2.length > 0 && (
        <div className="marquee marquee-row2">
          <div className="track reverse">
            {list2.map((client, idx) => (
              <span key={`r2-${client.id || idx}-${idx}`} className="item">
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo}
                    alt={client.name}
                  style={{ height: `${Number(client.height) || 26}px`, width: 'auto' }}
                  />
                ) : (
                  client.name
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
