"use client";

import styled from "styled-components";

interface BadgeProps {
  $variant?: "primary" | "secondary" | "accent" | "success";
}

const getVariantStyles = (variant: BadgeProps["$variant"]) => {
  switch (variant) {
    case "primary":
      return `
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
        color: #93c5fd;
        border: 1px solid rgba(147, 197, 253, 0.3);
      `;
    case "accent":
      return `
        background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.2));
        color: #f472b6;
        border: 1px solid rgba(244, 114, 182, 0.3);
      `;
    case "success":
      return `
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2));
        color: #86efac;
        border: 1px solid rgba(134, 239, 172, 0.3);
      `;
    case "secondary":
    default:
      return `
        background: rgba(255, 255, 255, 0.08);
        color: #cbd5e1;
        border: 1px solid rgba(255, 255, 255, 0.15);
      `;
  }
};

export const StyledBadge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  letter-spacing: 0.025em;
  transition: all 0.2s ease-in-out;

  ${(props) => getVariantStyles(props.$variant)}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
