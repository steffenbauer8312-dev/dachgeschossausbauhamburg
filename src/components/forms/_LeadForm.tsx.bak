import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import type { LeadFormData } from '../../types'

const PROPERTY_OPTIONS = [
  { value: 'einfamilienhaus', label: 'Einfamilienhaus' },
  { value: 'mehrfamilienhaus', label: 'Mehrfamilienhaus' },
  { value: 'reihenhaus', label: 'Reihenhaus' },
  { value: 'dachgeschoss', label: 'Dachgeschoss' },
]

interface LeadFormProps {
  onSubmit?: (data: LeadFormData) => void
  showMessage?: boolean
}

export function LeadForm({ onSubmit, showMessage = true }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>()

  async function handleFormSubmit(data: LeadFormData) {
    // In production, send to backend/API
    console.log('Lead submitted:', data)
    if (onSubmit) {
      onSubmit(data)
    }
    // Show success feedback
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.')
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      <Input
        id="name"
        label="Name"
        placeholder="Max Mustermann"
        error={errors.name?.message}
        {...register('name', { required: 'Bitte geben Sie Ihren Namen ein' })}
      />

      <Input
        id="phone"
        label="Telefon"
        type="tel"
        placeholder="+49 89 12345678"
        error={errors.phone?.message}
        {...register('phone', { required: 'Bitte geben Sie Ihre Telefonnummer ein' })}
      />

      <Input
        id="email"
        label="E-Mail"
        type="email"
        placeholder="max@beispiel.de"
        error={errors.email?.message}
        {...register('email', {
          required: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
          },
        })}
      />

      <Select
        id="propertyType"
        label="Objekttyp"
        options={PROPERTY_OPTIONS}
        error={errors.propertyType?.message}
        {...register('propertyType', { required: 'Bitte wählen Sie Ihren Objekttyp' })}
      />

      <Input
        id="zipCode"
        label="PLZ"
        placeholder="80331"
        maxLength={5}
        error={errors.zipCode?.message}
        {...register('zipCode', {
          required: 'Bitte geben Sie Ihre PLZ ein',
          pattern: { value: /^\d{5}$/, message: 'Bitte geben Sie eine gültige 5-stellige PLZ ein' },
        })}
      />

      {showMessage && (
        <Textarea
          id="message"
          label="Ihre Nachricht (optional)"
          placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Fragen..."
          {...register('message')}
        />
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfordern'}
      </Button>

      <p className="text-center text-xs text-slate-500">
        Wir melden uns innerhalb von 24 Stunden. Keine versteckten Kosten.
      </p>
    </form>
  )
}